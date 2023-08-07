<?php
  // Set the cache headers for the HTML file
  header('Cache-Control: no-cache, no-store, must-revalidate');
  header('Expires: 0');

 // Set the cache headers for the CSS file
 header('Cache-Control: max-age=3600');
 header('Expires: '.gmdate('D, d M Y H:i:s \G\M\T', time() + 3600));

  // Include the HTML file
  include 'home.html';
?>
