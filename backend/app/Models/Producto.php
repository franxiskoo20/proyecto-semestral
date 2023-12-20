<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    use HasFactory;

    protected $fillable = [
        'nombre',
        'marca',
        'precio',
        'fabrica_id',
        // Agrega otros campos según sea necesario
    ];

    // Relación con la fábrica
    public function fabrica()
    {
        return $this->belongsTo(Fabrica::class);
    }
}
