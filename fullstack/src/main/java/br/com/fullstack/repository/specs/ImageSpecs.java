package br.com.fullstack.repository.specs;

import org.springframework.data.jpa.domain.Specification;

import br.com.fullstack.domain.enums.ImageExtension;
import br.com.fullstack.domain.model.Image;

public class ImageSpecs {

    private ImageSpecs() {
    }

    public static Specification<Image> extensionEqual(ImageExtension extension) {
        return (root, _, cb) -> cb.equal(root.get("extension"), extension);
    }

    public static Specification<Image> nameLike(String name) {
        return (root, _, cb) -> cb.like(cb.upper(root.get("name")),
                "%" + name.toUpperCase() + "%");
    }

    public static Specification<Image> tagsLike(String tags) {
        return (root, _, cb) -> cb.like(cb.upper(root.get("tags")),
                "%" + tags.toUpperCase() + "%");
    }
}
