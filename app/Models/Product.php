<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;


    protected $table = 'products';

    protected $fillable = [
        'name','categories_id','stok','price','picture'
    ];

    protected $hidden = [
    ];


    public function categories()
    {
        return $this->hasMany(Product::class,'categories_id');
    }
    public function getPhotoAttribute($value)
    {
        return url('storage/' . $value);
    }
}