(function(A,_aoUndefined){A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_PHOTO:"ͼƬ"});QMEditor.FUNCLIB.Photo=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){this.setBindEditor(_aoParamSet.editor);var _oSelf=this,_oLang=_oSelf.getBindEditor().getLanguage();_oSelf.setId("Photo");_oSelf.setType("btn");_oSelf.setUiConfig({arrowPos:1,name:"photo",title:_oLang.FUN_PHOTO,label:_oLang.FUN_PHOTO});_oSelf.setfDoDefaultClick(function(_aoEvent){if(_aoEvent.target==_oSelf._moContainer.firstChild){A.preventDefault(_aoEvent);A.stopPropagation();_oSelf.getBindEditor().requireLocalImageByClient()}})},QMEditor.FUNCLIB.BASE);(function(){QMEditor.setupFunc()})()})(QMEditorAdapter);(function(A,_aoUndefined){A.extend(QMEditor.CONST.LANGUAGE.zh_CN,{FUN_SCREENSNAP:"��Ļ��ͼ"});QMEditor.FUNCLIB.ScreenSnap=QMEditor.FUNCLIB.inheritFrom(function(_aoParamSet){this.setId("ScreenSnap");this.setType("btn"