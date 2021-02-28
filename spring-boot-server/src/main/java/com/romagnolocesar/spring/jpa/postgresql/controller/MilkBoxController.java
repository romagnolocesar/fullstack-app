package com.romagnolocesar.spring.jpa.postgresql.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.romagnolocesar.spring.jpa.postgresql.model.MilkBox;
import com.romagnolocesar.spring.jpa.postgresql.repository.MilkBoxRepository;

//@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class MilkBoxController {

	@Autowired
	MilkBoxRepository milkboxRepository;

	@CrossOrigin
	@GetMapping("/milkboxes")
	public ResponseEntity<List<MilkBox>> getAllTutorials(@RequestParam(required = false) String codigo) {
		try {
			List<MilkBox> milkboxes = new ArrayList<MilkBox>();

			if (codigo == null)
				milkboxRepository.findAll().forEach(milkboxes::add);
			else
				milkboxRepository.findByNomeContaining(codigo).forEach(milkboxes::add);

			if (milkboxes.isEmpty()) {
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}

			return new ResponseEntity<>(milkboxes, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@CrossOrigin
	@GetMapping("/milkboxes/{id}")
	public ResponseEntity<MilkBox> getTutorialById(@PathVariable("id") long id) {
		Optional<MilkBox> milkboxData = milkboxRepository.findById(id);

		if (milkboxData.isPresent()) {
			return new ResponseEntity<>(milkboxData.get(), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin
	@PostMapping("/milkboxes/add")
	public ResponseEntity<MilkBox> createMilkBox(@RequestBody MilkBox milkbox) {
		try {
			MilkBox _milkbox = milkboxRepository
					.save(new MilkBox(milkbox.getCodigo(), milkbox.getNome()));
			return new ResponseEntity<>(_milkbox, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@CrossOrigin
	@PutMapping("/milkboxes/{id}")
	public ResponseEntity<MilkBox> updateMilkbox(@PathVariable("id") long id, @RequestBody MilkBox milkbox) {
		Optional<MilkBox> milkboxData = milkboxRepository.findById(id);

		if (milkboxData.isPresent()) {
			MilkBox _milkbox = milkboxData.get();
			_milkbox.setCodigo(milkbox.getCodigo());
			_milkbox.setNome(milkbox.getNome());
			return new ResponseEntity<>(milkboxRepository.save(_milkbox), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@CrossOrigin
	@DeleteMapping("/milkboxes/{id}")
	public ResponseEntity<HttpStatus> deleteMilkBox(@PathVariable("id") long id) {
		try {
			milkboxRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

//	@DeleteMapping("/tutorials")
//	public ResponseEntity<HttpStatus> deleteAllMilkBox() {
//		try {
//			milkboxRepository.deleteAll();
//			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//
//	}

//	@GetMapping("/tutorials/published")
//	public ResponseEntity<List<Tutorial>> findByPublished() {
//		try {
//			List<Tutorial> tutorials = tutorialRepository.findByPublished(true);
//
//			if (tutorials.isEmpty()) {
//				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//			}
//			return new ResponseEntity<>(tutorials, HttpStatus.OK);
//		} catch (Exception e) {
//			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//	}

}
