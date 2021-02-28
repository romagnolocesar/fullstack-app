package com.romagnolocesar.spring.jpa.postgresql.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.romagnolocesar.spring.jpa.postgresql.model.MilkBox;

public interface MilkBoxRepository extends JpaRepository<MilkBox, Long> {

  List<MilkBox> findByNomeContaining(String nome);

}
