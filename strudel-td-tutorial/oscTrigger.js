//////////////////////////////////////////////////////////////
//  Edited oscTrigger function
//  Created by Caro (@carovilleneuve)
//  Made for the TouchDesigner × Strudel Tutorial (2025)
//
//  To be replaced in osc.mjs file
//
//  Tutorial link:
//  https://www.patreon.com/carovilleneuve
//
//////////////////////////////////////////////////////////////

export async function oscTrigger(hap, currentTime, cps = 1, targetTime) {
  const ws = await connect();
  const controls = parseControlsFromHap(hap, cps);
  const keyvals = Object.entries(controls).flat();
  const instrument = controls.s || "event"; 
  const ts = collator.calculateTimestamp(currentTime, targetTime) * 1000;
  for (const [key, value] of Object.entries(controls)) {
    const val = (typeof value === "number") ? value : value.toString();

    const msg = {
      address: `/${instrument}/${key}`,  
      args: [val],
      timestamp: ts
    };

    if (hap.value.oschost) msg.host = hap.value.oschost;
    if (hap.value.oscport) msg.port = hap.value.oscport;
    ws.send(JSON.stringify(msg));
  }

}