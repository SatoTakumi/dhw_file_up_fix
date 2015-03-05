window.showModalDialog = window.open;

function doCommit(){
	var upload_file = document.getElementById("attachFileFormId").uploadFile.value;
	if( upload_file > "" ) {
	  var yn = confirm("ファイルが選択されていますがアップロードされていません。\nアップロードを終了しますか？");
	  if( yn == false )	return;
	}
	// 自身を閉じる
	opener.doSubmitAdd()
	window.close();
}
