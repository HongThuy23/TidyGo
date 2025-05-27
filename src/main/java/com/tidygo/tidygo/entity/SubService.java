package com.tidygo.tidygo.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Entity
@Table(name = "sub_service")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SubService {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "service_id")
    Service service;

    @Column(name = "name", nullable = false)
    String name;

    @Column(name = "description")
    String description;

    @Column(name = "original_price", nullable = false)
    Double originalPrice;

    @Column(name = "sales_price", nullable = false)
    Double salesPrice;

    @Column(name = "unit_quantity", nullable = false)
    Integer unitQuatity;

    @Column(name = "worker_quantity", nullable = false)
    Integer workerQuantity = 1;

    @OneToMany(mappedBy = "subService")
    List<JobPost> jobPosts;
}
