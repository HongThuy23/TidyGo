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
@Table(name = "address")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "account_id", nullable = false)
    Account account;

    @Column(name = "label", nullable = false)
    String label;

    @Column(name = "latitude", nullable = false)
    Double latitude;

    @Column(name = "longitude", nullable = false)
    Double longitude;

    @Column(name = "house_number", nullable = false)
    Integer houseNumber;

    @Column(name = "road", nullable = false)
    String road;

    @Column(name = "suburb", nullable = false)
    String suburb;

    @Column(name = "city", nullable = false)
    String city;

    @Column(name = "is_default", nullable = false)
    Boolean isDefault = false;

    @OneToMany(mappedBy = "address")
    List<JobPost> jobPosts;
}
