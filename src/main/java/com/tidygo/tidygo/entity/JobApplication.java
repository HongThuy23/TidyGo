package com.tidygo.tidygo.entity;

import java.util.List;

import com.tidygo.tidygo.entity.enums.JobApplicationStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "job_application")
@FieldDefaults(level = AccessLevel.PRIVATE)
public class JobApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne
    @JoinColumn(name = "job_post_id", nullable = false)
    JobPost jobPost;

    @ManyToOne
    @JoinColumn(name = "worker_id", nullable = false)
    Account worker;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    JobApplicationStatus status = JobApplicationStatus.APPLIED;

    @OneToMany(mappedBy = "jobApplication")
    List<Feedback> feedbacks;
}
