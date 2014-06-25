sap.ui.define(["jquery.sap.global","sap/ui/core/Control","google.maps","./MapUtils"],function(t,e,o,r){"use strict";var i=e.extend("openui5.googlemaps.Polyline",{metadata:{properties:{strokeColor:{type:"sap.ui.core.CSSColor",group:"Appearance",defaultValue:null},strokeOpacity:{type:"float"},strokeWeight:{type:"float"},icons:{type:"object"},path:{type:"object"},draggable:{type:"boolean"}},events:{click:{},dragEnd:{}},renderer:{}}});return i.prototype.parsePath=function(){var t=[];return this.getPath().forEach(function(e){t.push(r.objToLatLng(e))}),t},i.prototype.createPolyline=function(){this.polyline=new o.Polyline(this.getOptions()),this.polyline.setMap(this.map)},i.prototype.getOptions=function(){var t={};return t.path=this.parsePath(),t.strokeColor=this.getStrokeColor(),t.strokeOpacity=this.getStrokeOpacity(),t.strokeWeight=this.getStrokeWeight(),t.draggable=this.getDraggable(),t.icons=this.getIcons(),t},i.prototype.onMapRendered=function(t){this.map=t,this.createPolyline()},i.prototype.exit=function(){this.polyline.setMap(null)},i},!0);