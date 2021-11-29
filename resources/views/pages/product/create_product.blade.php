@extends('layouts.default')

@section('content')
<div class="m-heading-1 border-green m-bordered">

    <h3 class="btn sbold green"> <i class="fa fa-plus"></i> Form Add New Products</h3>

</div>
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN EXAMPLE TABLE PORTLET-->
        <div class="portlet light bordered">

            <div class="portlet-body">

                <form action="{{route('products.store')}}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="form-body">
                            <div class="col-md-6">
                                <div class="form-group form-md-line-input has-success ">
                                    <div class="input-icon">
                                        <input type="text" class="form-control" name="name">
                                        <label for="form_control_1">Name Product</label>
                                        <i class="fa fa-box"></i>
                                    </div>
                                </div>



                                <div class="form-group form-md-line-input has-success  has-success">
                                    <select class="form-control edited" id="form_control_1" name="categories_id">
                                        <option value=""> ---Select Category --- </option>

                                        @foreach ($items as $it)

                                        <option value="{{$it->id}}">{{$it->name_categories}}</option>

                                        @endforeach

                                    </select>
                                    <label for="form_control_1">Program Audit</label>
                                </div>

                                <div class="form-group form-md-line-input has-success ">
                                    <div class="input-icon">
                                        <input type="text" class="form-control" name="stok">
                                        <label for="form_control_1">Stok</label>
                                        <i class="fa fa-box"></i>
                                    </div>
                                </div>

                                <div class="form-group form-md-line-input has-success ">
                                    <div class="input-icon">
                                        <input type="text" class="form-control" name="price">
                                        <label for="form_control_1">Price</label>
                                        <i class="fa fa-box"></i>
                                    </div>
                                </div>

                                <div class="form-group form-md-line-input has-success ">
                                    <div class="input-icon">
                                        <input type="file" class="form-control" name="picture">
                                        <label for="form_control_1">Picture</label>
                                        <i class="fa fa-box"></i>
                                    </div>
                                </div>

                                <button type="submit" class="btn-yellow">Save</button>
                            </div>
                        </div>
                        <div class="row">

                        </div>

                    </div>
                </form>
            </div>
            @endsection

            @push('after-script')

            @endpush
