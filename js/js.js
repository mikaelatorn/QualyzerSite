// JavaScript Document
function selectDiv(obj, num, len){
	for(id=1; id<=len; id++){
			var ss = obj+id;
			var snav = obj+"nav"+id;
			if (id==num){		
				try{document.getElementById(ss).style.display="block"}catch(e){};															 
				try{document.getElementById(snav).className = "on"}catch(e){};		
			}else{
				try{document.getElementById(ss).style.display="none"}catch(e){};
				try{document.getElementById(snav).className = ""}catch(e){};			
			}
		}
}