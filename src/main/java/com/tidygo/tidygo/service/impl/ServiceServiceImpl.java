package com.tidygo.tidygo.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.tidygo.tidygo.mapper.ServiceMapper;
import com.tidygo.tidygo.repository.ServiceRepository;
import com.tidygo.tidygo.response.ServiceDetailResponse;
import com.tidygo.tidygo.service.IServiceService;

import lombok.AccessLevel;
import lombok.RequiredArgsConstructor;
import lombok.experimental.FieldDefaults;

@Service
@RequiredArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ServiceServiceImpl implements IServiceService {
    final ServiceRepository serviceRepository;
    final ServiceMapper serviceMapper;

    @Override
    public List<ServiceDetailResponse> getAllServices() {
        // return serviceMapper.toServiceResponse(serviceRepository.findAll());
        return serviceMapper.toServiceDetailResponse(serviceRepository.findAll());
    }

}
