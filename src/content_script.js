walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	// English
	v = v.replace(/\bbubble(s?)\b/g, "team$1");
	v = v.replace(/\bBubble(s?)\b/g, "Team$1");
	//v = v.replace(/\bbubbl(.*?)\b/g, "team$1");
	//v = v.replace(/\bBubbl(.*?)\b/g, "Team$1");

	// French
	v = v.replace(/\bbulle(s?)\b/g, "équipe$1");
	v = v.replace(/\bBulle(s?)\b/g, "Équipe$1");
	//v = v.replace(/\bbulle(.*?)\b/g, "équipe$1");

	textNode.nodeValue = v;
}
