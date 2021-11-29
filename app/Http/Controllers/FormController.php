<?php

namespace App\Http\Controllers;
use App\Models\Form;

use Illuminate\Http\Request;

class FormController extends Controller
{
    public function index()
    {
        return view('form.survey');
    }

    public function store(Request $request)
    {
        $data = $request->all();
       return response()->json(array('data'=> $data), 200);
    }
}