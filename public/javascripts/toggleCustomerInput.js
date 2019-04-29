$(document).ready(function () {
    $('#job_customer_show').hide();

    //let the user set the customer field, adding a new job call, only if the job is external
    $('#job_type').change(function () {
        let type = $(this).val();
        if (type === 'EXTERNAL') {
            $('#job_customer_show').show();
        } else {
            $('#job_customer_show').hide();
        }
    });
});