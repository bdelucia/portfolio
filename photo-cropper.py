from PIL import Image
import os

# Directory with images
input_folder = r'C:\Users\bobby\OneDrive\Pictures\blog\ChickenParm_08-25-2025'
output_folder = r"C:\Users\bobby\OneDrive\Pictures\blog/"
os.makedirs(output_folder, exist_ok=True)

# Crop coordinates (left, top, right, bottom)
crop_box = (50, 100, 50, 100)

for filename in os.listdir(input_folder):
    if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        img = Image.open(os.path.join(input_folder, filename))
        cropped_img = img.crop(crop_box)
        cropped_img.save(os.path.join(output_folder, filename))