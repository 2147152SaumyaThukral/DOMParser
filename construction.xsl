<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html> 
<body bgcolor=color:white>
  <h2 style="color:Black "><center>Our Managers and their current Projects</center></h2>
  
  <table border="4">
    <tr bgcolor="#2eca6a">
      <th style="text-align:left">Manager Name</th>
      <th style="text-align:left">Phone Number</th>
      <th style="text-align:left">Address</th>
	  <th style="text-align:left">Email</th>
	  <th style="text-align:left">Age</th>
	  <th style="text-align:left">Projects</th>
    </tr>
    <xsl:for-each select="catalog/cd">
    <xsl:sort select="artist"/>
    <tr bgcolor:white>
      <td style="#2eca6a"><xsl:value-of select="Manager Name"/></td>
      <td><xsl:value-of select="Phone Number"/></td>
      <td><xsl:value-of select="Age"/></td>
    </tr>
    </xsl:for-each>

 

  </table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

