package com.romagnolocesar.spring.jpa.postgresql.model;

import javax.persistence.*;

@Entity
@Table(name = "produto")
public class MilkBox {
	@SequenceGenerator(name = "port_gen", sequenceName = "port_gen",  initialValue = 2000)
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO, generator = "port_gen")
	private long id;

	@Column(name = "codigo")
	private String codigo;

	@Column(name = "nome")
	private String nome;


	public MilkBox() {

	}

	public MilkBox(String codigo, String nome) {
		this.codigo = codigo;
		this.nome = nome;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}

	public String getCodigo() {
		return codigo;
	}

	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
	public String toString() {
		return "MilkBox [id=" + id + ", codigo=" + codigo + ", nome=" + nome + "]";
	}

}
