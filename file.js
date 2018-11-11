/*
	JS FileSystem API
	By: Ari Stehney
*/

function readAll(fname){
	return localStorage.getItem(fname);
}

function writeAll(fname, fconts){
	return localStorage.setItem(fname, fconts);
}