from sys import argv
import os.path
script, postdate, postname = argv
headertext = """
<!DOCTYPE html>
<html>
    <head>
        <title>chasepeck - blog ("""+postdate+""")</title>
        <link rel="stylesheet" href="/stylesheets/stylesheet_blogpost.css">
        <link rel="icon" href="/assets/favicon.png" type="image/png">
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
        <link rel="manifest" href="/its_web_man.webmanifest">
        <link rel="stylesheet" href="https://use.typekit.net/fym7jvp.css">
        <meta charset="UTF-8">
        <meta name="description" content="chase peck blog: """+postname+" ("+postdate+""")\">
        <meta name="keywords" content="games, developer, development, programming, chase peck games, chase peck films, films, movies, videos, shorts, comedy, satire">
        <style>
            body {
                background-color: gainsboro;
                background-image: url("/assets/bgs/blogbg.gif");
                background-size: cover;
            }
        </style>
    </head><body>
    <!--Header (all black bg)-->
    <div id="header" style="padding: 10px; border-bottom: 1px solid white; background-color: black; font-family: dos_vga_437; font-size:30px">
        <style>
            #header a:link{
            font-family: dos_vga_437;
            color:white;
            font-style: normal;
            font-size: 30px;
            text-decoration: none;
            }
            #header a:hover{
            font-family: dos_vga_437;
            color:black !important;
            background-color: white;
            font-style: normal;
            font-size: 30px;
            text-decoration: none;
            }
            #header a:visited{
            font-family: dos_vga_437;
            color: white;
            font-style: normal;
            font-size: 30px;
            text-decoration: none;
            }
            div{
                color:white;
            }
        </style>
        <a style="text-decoration: none;" href="/">chasepeck.com</a><a style="text-decoration: none;" href="/blog">/blog</a>/"""+postdate+"""
    </div>
    <div class="blog" style="padding-left: 80px; padding-right: 80px; line-height: 44px;"><p>
"""
footertext = """
</p>
</div>
"""
if os.path.exists("blog/"+postdate+".html"):
    print("WARNING! File already exists. Are you sure you want to create a new post? y/n")
    _x = input()
    if not "y" in _x:
        raise Exception("Cancelled")
blogfile=open("blog/"+postdate+".html","w")
print("Type your HTML post:")
content = input()
towrite = headertext+content+footertext
blogfile.write(towrite)