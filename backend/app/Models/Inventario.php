<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
    use HasFactory;

    // ... (otros métodos y propiedades)

    // Relación con la bodega
    public function bodega()
    {
        return $this->belongsTo(Bodega::class);
    }
}
