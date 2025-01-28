package br.com.fullstack.domain.Mapper;

import java.io.IOException;
import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import br.com.fullstack.domain.enums.ImageExtension;
import br.com.fullstack.domain.model.Image;

@Component
public class ImageMapper {

    @SuppressWarnings("null")
    public Image mapToImage(MultipartFile file, String name, List<String> tags) throws IOException {
        Image image = Image.builder()
                .name(name)
                .tags(String.join(",", tags))
                .size(file.getSize())
                .extension(ImageExtension.valueOf(MediaType.valueOf(file.getContentType())))
                .file(file.getBytes())
                .build();
        return image;
    }
}
