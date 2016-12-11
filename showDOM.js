function showDOM(){
	var w = window.open();
	w.document.write("<html>", "<body>");
	w.document.write("<ul>");
	showChildNodes(document.body, w.document);
	w.document.write("</ul>");
	w.document.write("<body>", "<html>");
}

function showChildNodes(node, doc){

	if (node.nodeType == 3) {
		if (!(/^\s+/.test(node.nodeValue))) {
			doc.write("<li><i>"+node.nodeValue+"</i></li>");
		}
	}
	if (node.nodeType == 1) {
		doc.write("<li><b>"+node.nodeName+" </b><ul>");
		for (var i = 0; i < node.childNodes.length; i++) {
			showChildNodes(node.childNodes[i], doc);
		}
		doc.write("</ul></li>");
	}
}

// var bodyEl = document.body.childNodes;

// function showDOM(){
// 	var newWindow = window.open();

// 	newWindow.document.write("body:","<br/>");
// 	newWindow.document.write(showChildNodes(bodyEl));

// }

// function showChildNodes(node){
// 	var codeVar = "";
// 	for (var i = 0; i < node.length; i++) {
// 		if (node[i].nodeType == 1) {
// 			codeVar += ">>" + node[i].tagName;
// 			codeVar += ">>" + showChildNodes(node[i].childNodes);
// 		}
// 		if(node[i].nodeType == 3){
// 			codeVar += node[i].nodeValue + "<br/>";
// 		}
// 	}
// 	return codeVar;
// }
