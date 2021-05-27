<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Survey Form</title>
  </head>
  <body>
    <div id='Dimensions'>
      <form action="main.php" method="post">
      <!-- <input type="text" name="first_name">
      <input type="text" name="last_name"> -->
      <p>First Name<input type="text"name="first_name"></p>
      <p>Last Name<input type="text" name="last_name"></p>
      <p>Location:
        <select name='location'>
          <option value='Mumbai'>Mumbai</option>
          <option value='Delhi'>Delhi</option>
          <option value='Pune'>Pune</option>
          <option value='Raigad'>Raigad</option>
        </select></p>
      <p>Favorite Language
        <select name='language'>
          <option value='Rail'>Rail</option>
          <option value='Ruby'>Ruby</option>
          <option value='Python'>Python</option>
          <option value='PHP'>PHP</option>
        </select></p>
      <input type="submit"> <value type="submit">


      </form>


  </body>
</html>
