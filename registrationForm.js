function validation(){                                       //Regular Expression is an object that describe the pattern of the characters. Regular expression is sequence of characters that forms a search pattern. In JavaScript, a RegExp object is a pattern with properties and methods.
    var name="Samuvel Ananth";                              //i-Case Insensitive     g-Global Search      m-Multiline Match using ^ and $    ^ means Start  $ means end

    var exp=/S/;
    var result=name.match(exp);
    console.log(result);
}
validation();