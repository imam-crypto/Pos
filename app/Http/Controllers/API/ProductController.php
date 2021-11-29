<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
// use App\Models\Product;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    //

    public function all(Request $request)
    {
        $id = $request->input('id');
        $limit = $request->input('limit',6);
        $name = $request->input('name');
        $price_from = $request->input('price_from');
        $price_to = $request->input('price_to');



            $product = DB::table('products')
            ->join('categories','category_id', '=', 'products.category_id')
            ->get();

            if($product)
                return ResponseFormatter::success($product,'Data Produk Berhasil Diambil');
            else
                return ResponseFormatter::error(null,'Data Tidak Ada',404);



        // if($categori)
        // {
        //     $product = Product::with('galleries')->where('categori',$categori)->first();

        //     if($product)
        //         return ResponseFormatter::success($product,'Data Produk Berhasil Diambil');
        //     else
        //         return ResponseFormatter::error(null,'Data Tidak Ada',404);

        // }

        $product = DB::table('products')
            ->join('categories','category_id', '=', 'products.category_id')
            ->get();

        if($name)
            $product->where('name','like','%' . $name . '%');

        // if($type)
        //     $product->where('id_categories','like','%' . $type . '%');

        if($price_from)
            $product->where('price','>=', $price_from );

        if($price_to)
            $product->where('price','<=', $price_to );


        return ResponseFormatter::success(
            // $product->paginate($limit),
            'Data List Produk Berhasil Diambil'
        );

    }
}