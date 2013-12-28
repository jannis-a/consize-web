require 'compass-normalize'

http_path = "/"
css_dir = "resources/public/css"
sass_dir = "resources/compass"
images_dir = "resources/public/img"
javascripts_dir = "resources/public/js"

preferred_syntax = :sass
output_style = :compact
relative_assets = true
line_comments = false

# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
