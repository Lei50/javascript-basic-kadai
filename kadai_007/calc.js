let num = 20;

// 変数numの値が3の倍数であれば、「３の倍数です」という文字列を出力する
if (num % 5 == 0 && num % 3 == 0 ) {
    console.log('3と5の倍数です');
  }
  // 変数numの値が5であれば、「5の倍数です」という文字列を出力する
  else if (num % 5 == 0) {
    console.log('5の倍数です');
  }

// 変数numが3と5の倍数の場合： “3と5の倍数です”
    else if (num % 3 == 0 ) {
        console.log('3の倍数です');
      }
 
      // それ以外のときは、「はずれです」という文字列を出力する
  else {
    console.log(num);
  }