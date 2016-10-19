

$(window).load(function(){

var host="";

$("#balloons_all_over").html("<img src='"+host+"balloons/blue.png' style='position:absolute;' id='_1' alt='_1'/><img src='"+host+"balloons/green.png' style='position:absolute;' id='_2' alt='_2'/><img src='"+host+"balloons/pink.png' style='position:absolute;' id='_3' alt='_3'/><img src='"+host+"balloons/red.png' style='position:absolute;' id='_4' alt='_4'/><img src='"+host+"balloons/yellow.png' style='position:absolute;' id='_5' alt='_5'/><img src='"+host+"balloons/green_light.png' style='position:absolute;' id='_6' alt='_6'/><img src='"+host+"balloons/blue_light.png' style='position:absolute;' id='_7' alt='_7'/><img src='"+host+"balloons/blue.png' style='position:absolute;' id='_8' alt='_8'/><img src='"+host+"balloons/green.png' style='position:absolute;' id='_9' alt='_9'/><img src='"+host+"balloons/pink.png' style='position:absolute;' id='_10' alt='_10'/><img src='"+host+"balloons/red.png' style='position:absolute;' id='_11' alt='_11'/><img src='"+host+"balloons/yellow.png' style='position:absolute;' id='_12' alt='_12'/><img src='"+host+"balloons/green_light.png' style='position:absolute;' id='_13' alt='_13'/><img src='"+host+"balloons/blue_light.png' style='position:absolute;' id='_14' alt='_14'/>");

	var top_position=200;
	var left_position=10;

	var h_direction="";


    setPosition("_1",h_direction,top_position,left_position,0,500,7,110);
	setPosition("_2",h_direction,top_position+40,left_position+130,140,600,8,110);
	setPosition("_3",h_direction,top_position+580,left_position+760, 0,600,7,100);
	setPosition("_4",h_direction,top_position+620,left_position+180,340,960,8,100);
	setPosition("_5",h_direction,top_position+160,left_position+50, 50,789,8,100);
	setPosition("_6",h_direction,top_position+820,left_position+420,400,1200,7,100);
	setPosition("_7",h_direction,top_position+930,left_position+810, 0,700,8,110);
	
	setPosition("_8",h_direction,top_position+370,left_position+670, 0,1120,7,110);
	setPosition("_9",h_direction,top_position+110,left_position+620,50,1000,8,110);
	setPosition("_10",h_direction,top_position+260,left_position+370,70,900,8,110);
	setPosition("_11",h_direction,top_position-780,left_position+660,80,1000,7,110);
	setPosition("_12",h_direction,top_position+310,left_position+485,100,1200,7,110);
	setPosition("_13",h_direction,top_position+680,left_position, 0,1600,7,110);
	setPosition("_14",h_direction,top_position+400,left_position+40,-10,750,7,110);
	
	
});

var document_height=$(document).height();



function setPosition(id,h_direction,top_position,left_position,left_range,right_range,delta,delay){
	$("#"+id).css("top", top_position);
	$("#"+id).css("left",left_position);

	top_position=top_position-delta;
	
	if(left_position>right_range)
		h_direction="left";
	else if(left_position<left_range)
		h_direction="right";
	
	if(h_direction=="left")
		left_position=left_position-delta;
	else
		left_position=left_position+delta;
	
	if(top_position<-290)
		top_position=document_height;
		
	


		setTimeout(	function() { 	
			setPosition(id,h_direction,top_position,left_position,left_range,right_range,delta,delay);	
		},delay); 
	}
