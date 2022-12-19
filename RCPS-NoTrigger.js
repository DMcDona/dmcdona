
    // Check for the various File API support.
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        // Great success! All the File APIs are supported.
        //alert('Browser support file uploads')
    } else {
        // What to do at this point
        alert('The file upload is not fully supported in this browser.');
    }

    // make sure everything that uses jQuery is wrapped in this block

    $(function () {

        // add validation rule to count new lines as \r\n (CRLF) because that is how the server reads the textarea values
        $(".wb-frmvld").on("wb-ready.wb-frmvld", function (event) {
            $('textarea.form-control').each(function () {
                $(this).rules("add",
                    {
                        normalizer: function (value) {
                            try {
                                var newV = value.replace(new RegExp("(?<!\r)\n", "g"), "\r\n");
                                return newV;
                            } catch (e) {
                                console.log("Normalizer failed");
                                return value;
                            }
                        }
                    }
                )
            });
        });

        // Nature of Research change
        $('body').on('change', '#NatureOfResearch input[type=checkbox]', RCPS_HandleNatureOfResearchChange)

        $('body').on('change', '#AdditionalHeritageAreaIds', RCPS_ShowAdditionalHeritageAreas);

        // Prior Approval change
        $('body').on('change', '#PriorApprovalGroup', RCPS_HandlePriorApprovalChange);

        // Animal Care Pending change
        $('body').on('change', '#AnimalCarePendingGroup', RCPS_HandleAnimalCarePendingChange);

        // Vertebrate Group change
        $('body').on('change', '#VertebrateGroup', RCPS_HandleVertebrateAnimalChange);

        // File upload
        $('body').on('change', '#Files', RCPS_HandleFileSelect);

        // hide/disable using JS so that the fields are available if JS is disabled
        $('#ArchaeologicalSiteNumber').prop("disabled", true); // when nothing is selected, keep Archeology site number disabled
        $('#PriorApprovalGroup').hide();
        $("#AnimalCarePendingGroup").hide();
        $('#priorApprovalRequirementText22').hide();
        $('#priorApprovalRequirementText23').hide();

        // run form logic in case of postback
        RCPS_HandleNatureOfResearchChange();
        RCPS_ShowAdditionalHeritageAreas();
        RCPS_HandlePriorApprovalChange();
        RCPS_HandleAnimalCarePendingChange();
        RCPS_HandleVertebrateAnimalChange();

    });

    function RCPS_OnAjaxSuccess(response) {
        RCPS_HideSpinner();
    }

    function RCPS_OnAjaxFailure(response) {
        RCPS_ShowError();
    }

    function RCPS_OnAjaxBegin(response) {
        RCPS_ShowSpinner();
    } 19

    function RCPS_ShowSpinner() {
        $('.rcps-loader').removeClass('rcps-stop-animation');
        $('.rcps-spinner').show();
    }

    function RCPS_ShowError() {

        $('.rcps-loader').addClass('rcps-stop-animation');

        // timeout gives the spinner a chance to update
        setTimeout(function () {
            alert('An unknown error has occurred. Please try again, and contact Parks Canada directly if it persists.');

            RCPS_HideSpinner();
        }, 250);
    }

    function RCPS_HideSpinner() {
        $('.rcps-spinner').hide();
        $('.rcps-loader').removeClass('rcps-stop-animation');
    }

    function RCPS_HandleNatureOfResearchChange() {

        var isArchChecked = $('#NatureOfResearch').find('input[type=checkbox][data-id="ARC"]')[0].checked;

        if (isArchChecked) {
            $('#ArchaeologicalSiteNumberLabel').addClass('required');
            $("#IsMultiYearFalse").show();
            $("#MultiYearRadioLabel").hide();
            $("#IsMultiYearFalse").prop("checked", true);
            $("#IsMultiYearTrue").prop("checked", false);
            $('#ArchaeologicalSiteNumber').prop("disabled", false);
            $("#ArchaeologicalSiteNumber").prop('required', true); // If Archeology is selected validate Q19
            $("[for='ArchaeologicalSiteNumber'] strong.required").show();
            document.getElementById('ArchaeologicalSiteNumber').title = '';

            // when ValidationSummary is visible we need to update the Arch Site Number field warning message accordingly
            if ($('#errors-form0').is(":visible")) {
                $('#form0').valid();
            }
        } else {
            $('#ArchaeologicalSiteNumberLabel').removeClass('required');
            $("#IsMultiYearFalse").show();
            $("#MultiYearRadioLabel").show();
            $('#ArchaeologicalSiteNumber').prop("disabled", true);
            $("#ArchaeologicalSiteNumber").prop('required', false);
            $("[for='ArchaeologicalSiteNumber'] strong.required").hide();
            document.getElementById('ArchaeologicalSiteNumber').value = '';
            document.getElementById('ArchaeologicalSiteNumber').title = 'Archaeology must be selected'; // todo:Rob label

            // when ValidationSummary is visible we need to update the Arch Site Number field warning message accordingly
            if ($('#errors-form0').is(":visible")) {
                $('#form0').valid();
            }
        }
    }

    function RCPS_ShowAdditionalHeritageAreas() {

        var items = $('#AdditionalHeritageAreaIds option:selected').toArray().map(function (item) { return "<span>" + item.text + "</span>" }).join('');

        if (items.length > 0) {
            $('#additionalHeritageAreaList').html(items);
            $('#additionalHeritageAreaList').css('display', 'inline-block');
        } else {
            $('#additionalHeritageAreaList').hide();
        }
    }

    function RCPS_HandlePriorApprovalChange() {

        // new form
        if (!$('#PriorApproval').is(':checked') && !$('#PriorApprovalFalse').is(':checked')) {
            return;
        }


        if (!$('#PriorApprovalFalse').is(':checked')) {
            $('#priorApprovalRequirementText22').show();
            $('#priorApprovalRequirementText23').hide();
            $("#AnimalCarePendingGroup").hide();
        } else {
            $('#priorApprovalRequirementText22').hide();

            $("#AnimalCarePendingGroup").show();
        }
    }

    function RCPS_HandleAnimalCarePendingChange() {

        // new form
        if (!$('#AnimalCarePending').is(':checked') && !$('#AnimalCarePendingFalse').is(':checked')) {
            return;
        }

        if (!$('#AnimalCarePendingFalse').is(':checked')) {
            $('#priorApprovalRequirementText23').show();
        } else {
            $('#priorApprovalRequirementText23').hide();
        }
    }

    function RCPS_HandleVertebrateAnimalChange() {

        // console.log('CHANGE');

        // new form
        if (!$('#VertebrateAnimal').is(':checked') && !$('#VertebrateAnimalFalse').is(':checked')) {
            // console.log('RETURN');
            return;
        }

        if ($('#VertebrateAnimalFalse').is(':checked')) {

            $("#PriorApprovalGroup").hide();
            $("#AnimalCarePendingGroup").hide();
        } else {
            $("#PriorApprovalGroup").show();
        }
    }

    function RCPS_HandleFileSelect(evt) {
        var files = evt.target.files; // FileList object
        var totalFileSize = 0;
        var output = [];
        for (var i = 0, f; f = files[i]; i++) {
            totalFileSize = totalFileSize + f.size;
            output.push('<li><strong>', f.name, '</strong>, ',
                (f.size / 1024).toFixed(2), ' KB',
                '</li>');
        }
        totalFileSize = totalFileSize / 1024;
        output.push('<li><strong>', 'Total file size', '</strong>, ',
            totalFileSize.toFixed(2), ' KB',
            '</li>');
        $('#ListFiles').html('<ul>' + output.join('') + '</ul>');
        $('#TotalFileSize').val(totalFileSize.toFixed(2));
        if (totalFileSize > 50000) {
            $('#Submit').addClass('disabled');
            $('#SizeError').removeClass('hidden').addClass('error');
            return;
        }
        $('#Submit').removeClass('disabled');
        $('#SizeError').addClass('hidden').removeClass('error');

    }

    // debug spinner
    //ShowSpinner();
    //setTimeout(function () {

    //    ShowError();

    //}, 5000);

    //$('#RcpsApplication').on("wb-contentupdated", function (event, data) {
    //    // console.log('Data Ajax Complete');
    //});

    //TODO server side is handling this. perhaps it should be implemented client side as well
    //If client side is needed this should be refactored
    //$('#HearitageAreaId').on('click', function () {
    //    $('#AdditionalHeritageAreaIds').empty();
    //    $.each(heritageAreaList, function (i, p) { // additional heritage areas
    //        const selectedHeritageArea = $('#HearitageAreaId :selected').text();
    //        if (p.Description !== selectedHeritageArea) {
    //            var option = '<option…