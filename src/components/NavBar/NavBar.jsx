export default function() {
  function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
  return (
    <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>Navigation bar</title>
  </head>
  <body>
    <header>
      <div id="brand"><a href="/">U-LIMS</a></div>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Test Results</a></li>
          <li><a href="/about">Test Request Register</a></li>
          <li id="login"><a href="/login" >Login</a></li>
          <li id="signup"><a href="/signup">Signup</a></li>
        </ul>
      </nav>
      <div id="hamburger-icon" onclick={toggleMobileMenu}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <ul class="mobile-menu">
        <li><a href="/home">Home</a></li>
          <li><a href="/products">Test Results</a></li>
          <li><a href="/about">Test Request Register</a></li>
          <li id="login"><a href="/login" >Login</a></li>
          <li id="signup"><a href="/signup">Signup</a></li>
        </ul>
      </div>
    </header>
    <script src="index.js"></script>
  </body>
</html>

  )
}