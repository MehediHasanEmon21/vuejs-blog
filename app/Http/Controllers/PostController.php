<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(){

    	return $posts = Post::with(['category','user'])->get();

    }
}
