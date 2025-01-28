package br.com.fullstack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.fullstack.domain.model.Image;

public interface ImageRepository extends JpaRepository<Image, String> {

}