function ShowHideDiv(idHideDiv,idShowDiv)
{
document.getElementById(idHideDiv).style.display = 'none';
document.getElementById(idShowDiv).style.display = 'block';
}

/////////////////////////////////////////IN FILE///////////////////////////////////////////
function ShowHideDivIn()
{
	var nbr=document.getElementById("in_file_number").value;
	
	if(nbr<=0)
	{
		alert("Only strict positive integers accepted");
	}
	else
	{
		ShowHideDiv('in_file_number_div','in_file_information_div')
		progressBarContinue();
	}
}

/////////////////////////////////////////OUT FILE///////////////////////////////////////////
function ShowHideDivOut()
{
	var on=document.getElementById("optionSingleOn").checked;
	var off=document.getElementById("optionSingleOff").checked;
	if(off==true && on==false)
	{
		addFilesOut();
	}
	else
	{
		addFilesOutOn();
	}

		document.getElementById('out_file_pre_option').style.display = 'none';
		document.getElementById('out_file_information_div').style.display = 'block';

}


/////////////////////////////////////////MAPPING///////////////////////////////////////////
function ShowHideDivMappingInfo()
{
		var cpt_mapping=localStorage.getItem("cpt_mapping");
		var nbr=document.getElementById('mapping_file_number').value;
		var array=[];
		var ok=true;
		
		// check the structure for every out-file
		for(var i=1;i<=nbr;i++)
		{
			var oneStructBool=false;
			for(var j=1;j<=cpt_mapping;j++)
			{

				var t=document.getElementById("checkBoxMapping_"+i+j).checked;
				if(t==true && oneStructBool==false)
				{
					oneStructBool=true;
					array[i-1]=j;
					//alert(code);
				}
				else if(t==true && oneStructBool==true)
				{alert("You can only check 1 out structure per mapping-file. Verify checkboxes");
				ok=false;}
				
				
			}
			
			if(oneStructBool==false)
			{
				alert("You have to check 1 out structure per mapping-file. Verify checkboxes");
				ok=false;
			}		
		}
		
		document.getElementById("out_file_name"+1).value;  // 1 fois le nom du out file cest ok ou besoin de X fois l'écrire (X=nbre de in-files)
		
		
		if(ok==true)
		{
			ShowHideDiv('mapping_info_bigDiv','mapping_structure_bigDiv');
			progressBarContinue();
		}
}

function ShowHideDivMapping()
{

	var on=document.getElementById("optionMappingOn").checked;
	var off=document.getElementById("optionMappingOff").checked;
	if(off==true && on==false)
	{
		ShowHideDiv('mapping_info_bigDiv','network_analysis_pre');
		progressBarContinue()
		progressBarContinue()
		progressBarContinue()
		progressBarContinue()
	}
	else
	{
		ShowHideDiv('mapping_file_pre_option','mapping_file_number_div');
	}

}

function ShowHideDivMappingChoice()
{
	var nbr=document.getElementById("mapping_file_number").value;
   if(nbr>0)
   {
		checkBoxesMappingSetting();
		ShowHideDiv('mapping_file_processes','mapping_file_settings')
   }
   else if(nbr==0)
   {
		checkBoxesOutSetting()
		ShowHideDiv('mapping_file_processes','out_file_choice_div')
		//storeNbrOfProcesses(-1);
		
   }

}

function ShowHideDivProcessBack()  //back vers le nbr de mapping file si cetait a 0
{
	alert('All your mapping processes have been erased');
	storeNbrOfProcesses(0);
   var nbr=document.getElementById("mapping_file_number").value;
   if(nbr>0)
   {
		ShowHideDiv('mapping_processes_bigDiv','mapping_structure_bigDiv');
		progressBarBack();
   }
   else if(nbr==0)
   {
		ShowHideDiv('mapping_processes_bigDiv','mapping_info_bigDiv');
		progressBarBack();
		progressBarBack();
		progressBarBack();
		
   }
}


function ShowHideDivRemoveBack()  //back vers les new process si nbr de mapping file est nul (on skip replacing values)
{
   var nbr=document.getElementById("mapping_file_number").value;
   if(nbr>0)
   {
		ShowHideDiv('removing_div','dropping_div')
   }
   else if(nbr==0)
   {
		ShowHideDiv('removing_div','out_file_choice_div');
		//storeNbrOfProcesses(-1);
		
   }
}



function ShowHideDivProcessContinue()   // si 0 mapping file pas de process de replacing value à afficher ni de choix de structure
{
	var nbr=document.getElementById("mapping_file_number").value;
	
	if(nbr>0)
	{
		ShowHideDiv('out_file_choice_div','replacing_div');
	}
	else if(nbr==0)
	{
		ShowHideDiv('out_file_choice_div','removing_div');

	}

}


function ShowHideDivNumberMapping()   // si 0 mapping file pas de process de replacing value et de dropping à afficher ni de structure a introduire
{
	var nbr=document.getElementById("mapping_file_number").value;
	
	if(nbr>0)

	{
		ShowHideDiv('mapping_file_number_div','mapping_file_information_div');
		addFilesMapping();
		checkBoxesMapping(1);
		checkBoxesMappingStruc(1);
		progressBarContinue();
	}
	else if(nbr==0)
	{
		localStorage.setItem('replacing_divOn','false');
		localStorage.setItem('dropping_divOn','false');
		ShowHideDiv('mapping_info_bigDiv','mapping_processes_bigDiv');
		progressBarContinue();
		progressBarContinue();
		progressBarContinue();
		
	}
	else
	{
		alert("No negative number");
	}
}

///////////////////////////////////// NETWORK////////////////////////////////////
function ShowHideDivNetwork()
{
   var YesNo=localStorage.getItem("choiceYesNo");
   if(YesNo=="yes")
   {
		ShowHideDiv('network_analysis_pre','mapping_processes_bigDiv');
		progressBarBack();
   }
   else
   {
		ShowHideDiv('network_analysis_pre','mapping_info_bigDiv');
		progressBarBack();
		progressBarBack();
		progressBarBack();
		progressBarBack();
   }
}


///////////////////////////////////////// CONFIG//////////////////////////////////
function ShowHideDivConfig()
{
   var YesNo=localStorage.getItem("NetworkYesNo");
   if(YesNo=="yes")
   {
		ShowHideDiv('config_file_bigDiv','network_analysis_div');

   }
   else
   {
		ShowHideDiv('config_file_bigDiv','network_analysis_pre');

   }
}










	
	
	