"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[2746],{90424:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>m,data:()=>v});var n=t(64516);const a=(0,n.Lk)("h1",{id:"tuya-zy-m100-24g",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#tuya-zy-m100-24g"},[(0,n.Lk)("span",null,"Tuya ZY-M100-24G")])],-1),s=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1),o=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"ZY-M100-24G")],-1),c=(0,n.Lk)("td",null,"Vendor",-1),l=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"24G MmWave radar human presence motion sensor")],-1),d=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"state, presence, distance, illuminance_lux, move_sensitivity, presence_sensitivity, radar_range, presence_timeout, linkquality")],-1),r=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY-M100-24G.png",alt:"Tuya ZY-M100-24G"})])],-1),u=(0,n.Lk)("h2",{id:"options",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#options"},[(0,n.Lk)("span",null,"Options")])],-1),h=(0,n.Fv)('<ul><li><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-enum" tabindex="-1"><a class="header-anchor" href="#state-enum"><span>State (enum)</span></a></h3><p>Presence state sensor. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>presence</code>, <code>move</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Occupancy. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="distance-numeric" tabindex="-1"><a class="header-anchor" href="#distance-numeric"><span>Distance (numeric)</span></a></h3><p>Target distance. Value can be found in the published state on the <code>distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric"><span>Illuminance (lux) (numeric)</span></a></h3><p>Illuminance sensor. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#move-sensitivity-numeric"><span>Move sensitivity (numeric)</span></a></h3><p>Motion sensitivity. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="radar-range-numeric" tabindex="-1"><a class="header-anchor" href="#radar-range-numeric"><span>Radar range (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>radar_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radar_range&quot;: NEW_VALUE}</code>. The minimal value is <code>1.5</code> and the maximum value is <code>5.5</code>. The unit of this value is <code>m</code>.</p><h3 id="presence-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#presence-timeout-numeric"><span>Presence timeout (numeric)</span></a></h3><p>Fade time. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>1500</code>. The unit of this value is <code>s</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',20),p={},m=(0,t(40681).A)(p,[["render",function(e,i){const t=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[a,(0,n.Lk)("table",null,[s,(0,n.Lk)("tbody",null,[o,(0,n.Lk)("tr",null,[c,(0,n.Lk)("td",null,[(0,n.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,n.k6)((()=>[(0,n.eW)("Tuya")])),_:1})])]),l,d,r])]),u,(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>[(0,n.eW)("How to use device type specific configuration")])),_:1})])]),h])}]]),v=JSON.parse('{"path":"/devices/ZY-M100-24G.html","title":"Tuya ZY-M100-24G control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY-M100-24G control via MQTT","description":"Integrate your Tuya ZY-M100-24G via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-08-26T06:45:18.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"State (enum)","slug":"state-enum","link":"#state-enum","children":[]},{"level":3,"title":"Presence (binary)","slug":"presence-binary","link":"#presence-binary","children":[]},{"level":3,"title":"Distance (numeric)","slug":"distance-numeric","link":"#distance-numeric","children":[]},{"level":3,"title":"Illuminance (lux) (numeric)","slug":"illuminance-lux-numeric","link":"#illuminance-lux-numeric","children":[]},{"level":3,"title":"Move sensitivity (numeric)","slug":"move-sensitivity-numeric","link":"#move-sensitivity-numeric","children":[]},{"level":3,"title":"Presence sensitivity (numeric)","slug":"presence-sensitivity-numeric","link":"#presence-sensitivity-numeric","children":[]},{"level":3,"title":"Radar range (numeric)","slug":"radar-range-numeric","link":"#radar-range-numeric","children":[]},{"level":3,"title":"Presence timeout (numeric)","slug":"presence-timeout-numeric","link":"#presence-timeout-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1722715476000},"filePathRelative":"devices/ZY-M100-24G.md"}')}}]);