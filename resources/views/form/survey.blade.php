@extends('layouts.default')

@section('content')
<meta name="csrf-token" content="{{ csrf_token() }}" />
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN EXAMPLE TABLE PORTLET-->
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="btn-group">
                    <a href="{{route('products.create')}}" id="sample_editable_1_new" class="btn sbold green"> Add New

                        <i class="fa fa-plus"></i>
                    </a>
                </div>
            </div>
            <div class="portlet-body">
                <div id="surveyContainer"></div>
            </div>
        </div>
    </div>
</div>





@endsection
@push('after-script')
<script type="text/javascript">
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
</script>
<script>
    Survey.StylesManager.applyTheme("darkblue");

var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"file","name":"question2"},{"type":"file","name":"question3"},{"type":"file","name":"question4"},{"type":"file","name":"question5"},{"type":"file","name":"question6"},{"type":"file","name":"question7"},{"type":"file","name":"question8"},{"type":"file","name":"question9"},{"type":"file","name":"question10"},{"type":"file","name":"question11"},{"type":"file","name":"question12"},{"type":"file","name":"question13"}],"description":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.

    $.ajax({
            url: 'form/store',
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                 console.log(data.msg);
                 },
            data: JSON.stringify(survey.data)
            });
    alert("The results are:" + JSON.stringify(survey.data));
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});
</script>
@endpush
