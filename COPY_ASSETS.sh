#!/bin/bash

# Create public directory structure
mkdir -p public/css
mkdir -p public/img/{avatars,banner,bg,blog,clients,content,icons,logos,portfolio,service,team}
mkdir -p public/fonts

# Copy CSS files
echo "Copying CSS files..."
cp adult-ai/css/*.css public/css/

# Copy all image files
echo "Copying image files..."
cp adult-ai/img/*.png public/img/ 2>/dev/null
cp adult-ai/img/*.jpg public/img/ 2>/dev/null
cp adult-ai/img/*.gif public/img/ 2>/dev/null
cp -r adult-ai/img/avatars/* public/img/avatars/
cp -r adult-ai/img/banner/* public/img/banner/
cp -r adult-ai/img/bg/* public/img/bg/
cp -r adult-ai/img/blog/* public/img/blog/
cp -r adult-ai/img/clients/* public/img/clients/
cp -r adult-ai/img/content/* public/img/content/
cp -r adult-ai/img/icons/* public/img/icons/
cp -r adult-ai/img/logos/* public/img/logos/
cp -r adult-ai/img/portfolio/* public/img/portfolio/
cp -r adult-ai/img/service/* public/img/service/
cp -r adult-ai/img/team/* public/img/team/

# Copy Font Awesome fonts
echo "Copying Font Awesome fonts..."
cp adult-ai/fonts/fa-*.* public/fonts/

# Copy Themify fonts
echo "Copying Themify fonts..."
cp adult-ai/fonts/themify* public/fonts/

# Copy other fonts
echo "Copying other fonts..."
cp adult-ai/fonts/lg* public/fonts/

echo "All assets copied successfully!"
echo "Public folder structure created and populated."
