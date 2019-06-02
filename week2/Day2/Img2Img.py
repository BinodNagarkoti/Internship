from PIL import Image
jpgfileSource = Image.open("snake.jpeg")
jpgfileTarget = Image.open("background.jpg") 
resizeJpgFileSource=jpgfileSource.resize((100,100),Image.NEAREST)
# resizeJpgFileSource.show()
jpgfileTarget.paste( resizeJpgFileSource,(50,315))

# jpgfileTarget.paste( resizeJpgFileSource,(50,50))
jpgfileTarget.save("new.jpg")
new =Image.open("new.jpg")
new.show()
# print(jpgfile.bits, jpgfile.size, jpgfile.format)
