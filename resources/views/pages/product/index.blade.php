@extends('layouts.default')

@section('content')
<div class="m-heading-1 border-green m-bordered">
    <h3>DataTables Products</h3>

</div>

@if($message = Session::get('sukses')){
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
    <strong>{{$message}}</strong>
</div>
}

@endif
<div class="row">
    <div class="col-md-12">
        <!-- BEGIN EXAMPLE TABLE PORTLET-->
        <div class="portlet light bordered">
            <div class="portlet-title">
                <div class="btn-group">
                    <a href="{{route('products.create')}}" id="sample_editable_1_new" class="btn sbold green"> Add New
                        Product
                        <i class="fa fa-plus"></i>
                    </a>
                </div>
            </div>
            <div class="portlet-body">
                <div class="table-toolbar">
                    <div class="row">

                        <div class="col-md-6 m-1" style="float: right">
                            <div class="btn-group pull-right">
                                <button class="btn green  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                    <i class="fa fa-angle-down"></i>
                                </button>
                                <ul class="dropdown-menu pull-right">
                                    <li>
                                        <a href="javascript:;">
                                            <i class="fa fa-print"></i> Print </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="fa fa-file-pdf-o"></i> Save as PDF </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i class="fa fa-file-excel-o"></i> Export to Excel </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-bordered table-hover" id="dataTable">
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th> Nama Barang </th>
                            <th> Nama Categori </th>
                            <th> Stok </th>
                            <th> Harga </th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>

                        @php
                        $no=1;
                        @endphp
                        @forelse ($items as $item)

                        <tr>
                            <td>
                                {{$no++}}
                            </td>
                            <td> {{$item->name}} </td>
                            <td>
                                {{$item->name_categories}}
                            </td>
                            <td>
                                <span class="label label-sm label-warning"> {{$item->stok}} </span>
                            </td>
                            <td class="center"> {{$item->price}} </td>
                            <td>
                                <div class="btn-group">
                                    <button class="btn btn-xs green dropdown-toggle" type="button"
                                        data-toggle="dropdown" aria-expanded="false"> Actions
                                        <i class="fa fa-angle-down"></i>
                                    </button>
                                    <ul class="dropdown-menu" role="menu">
                                        <li>
                                            <a href="javascript:;">
                                                <i class="icon-docs"></i> New Post </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="icon-tag"></i> New Comment </a>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="icon-user"></i> New User </a>
                                        </li>
                                        <li class="divider"> </li>
                                        <li>
                                            <a href="javascript:;">
                                                <i class="icon-flag"></i> Comments
                                                <span class="badge badge-success">4</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                        @empty
                        <h4>Data Kosong</h4>
                        @endforelse




                    </tbody>
                </table>
            </div>
        </div>
        <!-- END EXAMPLE TABLE PORTLET-->
    </div>
</div>
@endsection

@push('after-script')
z
@endpush
