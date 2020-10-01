//############################################//
/* popup */
//############################################//

var popup_window, player_instance, hasLocalStorage = MRPUtils.hasLocalStorage();  

function mrpOpenPopup(inst, settings){

	if(hasLocalStorage && localStorage.getItem('mrp_popup'))return;

	player_instance = inst;

    var popupUrl = settings.sourcePath + 'popup.html', pw = settings.popupWidth || player_instance.width(), ph = settings.popupHeight || player_instance.height(), left = (window.screen.width - pw) / 2, top = (window.screen.height - ph) / 2;

    if(!popup_window || popup_window.closed){
        popup_window = window.open(popupUrl,'audio_player','menubar=no,toolbar=no,location=no,scrollbars=1,resizable,width='+pw+',height='+ph+',left='+left+',top='+top+'');

        if(!popup_window) {
            alert("Player can not be opened in a popup window because your browser is blocking Pop-Ups. You need to allow Pop-Ups in browser for this site to use the Player.");
            return false;
        }
       
    }
}

function mrpNotifyParent(){//called from popup window when popup window has opened!

    if(player_instance && popup_window && popup_window.initPopup != undefined){

        /* only copies playlist from dom */

        var settings = player_instance.getSettings();
        settings.volume = player_instance.getVolume();

        player_instance.destroyInstance();

        //transfer elements to popup
        var wrapper = player_instance.getWrapper(),
        wrapper_id = wrapper.attr('id'),
        playlist_list = $(settings.playlistList),
        css = mrpjq('#mrp-css').attr('href');

        //if(APRPUtils.isIE()){//HIERARCHY_REQUEST_ERROR
            wrapper = wrapper.remove().wrap('<p>').parent().html();
            playlist_list = playlist_list.remove().wrap('<p>').parent().html();
        //}

        try {
            player = popup_window.initPopup(wrapper, wrapper_id, playlist_list, settings, css);
        }catch(e){
            alert('initPopup error: ' + e.message);
            return false;
        }

    }
}





