from PIL import Image

def remove_white_background_and_crop(input_path, output_path, threshold=240):
    """Remove white background and crop bottom text"""
    # Open image
    img = Image.open(input_path)
    img = img.convert("RGBA")
    
    # Crop the bottom part (remove SOOLGAME text)
    # The image appears to have text at the bottom, let's crop it
    width, height = img.size
    # Crop to remove bottom ~20% where the text is
    crop_height = int(height * 0.75)  # Keep top 75%
    img = img.crop((0, 0, width, crop_height))
    
    # Get image data
    datas = img.getdata()
    
    # Create new image data
    new_data = []
    for item in datas:
        # Check if pixel is close to white
        if item[0] > threshold and item[1] > threshold and item[2] > threshold:
            # Make it transparent
            new_data.append((255, 255, 255, 0))
        else:
            # Keep original pixel
            new_data.append(item)
    
    # Update image data
    img.putdata(new_data)
    
    # Save as PNG with transparency
    img.save(output_path, "PNG")
    print(f"Background removed and cropped! Saved to {output_path}")

if __name__ == "__main__":
    # Use the original image with white background
    input_file = "/Users/yerin_1/.gemini/antigravity/brain/be648bf9-11f7-4ab2-b95a-52832644e7cc/soolgame_hero_characters_1763686692244.png"
    output_file = "src/assets/image/hero-characters.png"
    
    remove_white_background_and_crop(input_file, output_file)
