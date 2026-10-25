#!/bin/bash
# Rebuild app.js, the artifact page and the installable index.html from the part files.
cd "$(dirname "$0")"
cat p0-logo.js p3a-data.js p3-core.js p3b-estimate.js p4-projects.js p4b-followups.js p4d-calendar.js p4c-clients.js p5-invoices.js p5b-payments.js p6-settings-boot.js > app.js && node --check app.js || exit 1
{ cat p1-head.html p2-body.html; echo "<script>"; cat app.js; echo "</script>"; } > creator-hub.html
{ cat <<'H'
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#121516">
<meta name="robots" content="noindex">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Creator Hub">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<link rel="icon" href="icons/icon-192.png">
H
cat p1-head.html; echo '</head><body>'; cat p2-body.html; echo "<script>"; cat app.js; echo "</script>"
echo '<script>if ("serviceWorker" in navigator) addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));</script>'
echo '</body></html>'; } > pwa/index.html
echo built
