package br.com.fullstack.domain.enums;

import java.util.Arrays;

import org.springframework.http.MediaType;

import lombok.Getter;

@Getter
public enum ImageExtension {
    PNG(MediaType.IMAGE_PNG),
    GIF(MediaType.IMAGE_GIF),
    JPEG(MediaType.IMAGE_JPEG);

    private MediaType mediaType;

    private ImageExtension(MediaType mediaType) {
        this.mediaType = mediaType;
    }

    public static ImageExtension valueOf(MediaType mediaType) {
        return Arrays.stream(values())
                .filter(ie -> ie.mediaType.equals(mediaType))
                .findFirst()
                .orElse(null);
    }

    public static ImageExtension ofName(String name) {
        return Arrays.stream(values())
                .filter(ie -> ie.name().equalsIgnoreCase(name))
                .findFirst()
                .orElse(null);
    }

}
