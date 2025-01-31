package br.com.fullstack.domain.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import br.com.fullstack.domain.enums.ImageExtension;
import br.com.fullstack.domain.model.Image;
import br.com.fullstack.repository.ImageRepository;
import jakarta.transaction.Transactional;

@Service
public class ImageService {

    private final ImageRepository repository;

    public ImageService(ImageRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public Image save(Image image) {
        return repository.save(image);
    }

    public Optional<Image> getById(String id) {
        return repository.findById(id);
    }

    public List<Image> search(ImageExtension extension, String query) {
        return repository.findByExtensionAndNameOrTagsLike(extension, query);
    }
}
