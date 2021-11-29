<?php

namespace App\Models\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\Product;
class Categori extends Model
{
    use HasFactory;
    protected $table = 'categories';

    protected $hidden = [
    ];


    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}