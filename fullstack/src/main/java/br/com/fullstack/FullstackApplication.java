package br.com.fullstack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class FullstackApplication {

	// @Bean
	// public CommandLineRunner commandLineRunner(@Autowired ImageRepository
	// repository) {
	// return args -> {
	// Image image = Image.builder()
	// .extension(ImageExtension.PNG)
	// .name("myimage")
	// .tags("teste")
	// .size(1000L)
	// .build();
	// repository.save(image);
	// };
	// }

	public static void main(String[] args) {
		SpringApplication.run(FullstackApplication.class, args);
	}

}
