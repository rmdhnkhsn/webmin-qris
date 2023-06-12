@extends('errors::layout')

@section('title', __('Service Unavailable'))
@section('code', '503')
@section('code1', '5')
@section('code2', '0')
@section('code3', '3')
@section('message', __($exception->getMessage() ?: 'Service Unavailable'))
