package com.tidygo.tidygo.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.tidygo.tidygo.entity.enums.Gender;
import com.tidygo.tidygo.entity.enums.WorkerContractStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@Entity
@Table(name = "worker_contract")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class WorkerContract {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @OneToOne
    @JoinColumn(name = "account_id", nullable = false)
    Account account;

    @Column(name = "first_name", nullable = false)
    String firstName;

    @Column(name = "last_name", nullable = false)
    String lastName;

    @Column(name = "email", nullable = false)
    String email;

    @Column(name = "bio")
    String bio;

    @Column(name = "experience_year")
    Double experienceYear;

    @Column(name = "id_photo", nullable = false)
    String idPhoto;

    @Column(name = "dob", nullable = false)
    LocalDate dob;

    @Enumerated(EnumType.STRING)
    @Column(name = "gender", nullable = false)
    Gender gender = Gender.FEMALE;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    WorkerContractStatus status = WorkerContractStatus.PENDING;

    @Column(name = "start_date", nullable = false)
    LocalDateTime startDate;

    @Column(name = "end_date", nullable = false)
    LocalDateTime endDate;

    @Column(name = "signed_at")
    LocalDateTime signedAt;

    @Column(name = "term_url", nullable = false)
    String termUrl;

    @CreationTimestamp
    @Column(name = "created_at", nullable = false, updatable = false)
    LocalDateTime createdAt = LocalDateTime.now();

    @UpdateTimestamp
    @Column(name = "updated_at", nullable = false)
    LocalDateTime updatedAt;

}
